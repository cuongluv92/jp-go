-- N3 V5 production validator
do $$
declare
  v_vocab integer;
  v_vex integer;
  v_kanji integer;
  v_kwords integer;
  v_grammar integer;
  v_gex integer;
  v_gusage integer;
  v_bad integer;
begin
  select count(*) into v_vocab from jp_vocab where level='N3';
  select count(*) into v_vex from jp_vocab_examples e join jp_vocab v on v.id=e.vocab_id where v.level='N3';
  select count(*) into v_kanji from jp_kanji where level='N3';
  select count(*) into v_kwords from jp_kanji_words w join jp_kanji k on k.id=w.kanji_id where k.level='N3';
  select count(*) into v_grammar from jp_grammar where level='N3';
  select count(*) into v_gex from jp_grammar_examples e join jp_grammar g on g.id=e.grammar_id where g.level='N3';
  select count(*) into v_gusage from jp_grammar_usages u join jp_grammar g on g.id=u.grammar_id where g.level='N3';
  if v_vocab <> 844 then raise exception 'N3 vocab count %, expected 844',v_vocab; end if;
  if v_vex <> 2532 then raise exception 'N3 vocab examples %, expected 2532',v_vex; end if;
  if v_kanji <> 393 then raise exception 'N3 kanji %, expected 393',v_kanji; end if;
  if v_kwords <> 1208 then raise exception 'N3 kanji words %, expected 1208',v_kwords; end if;
  if v_grammar <> 128 then raise exception 'N3 grammar %, expected 128',v_grammar; end if;
  if v_gex <> 379 then raise exception 'N3 grammar examples %, expected 379',v_gex; end if;
  if v_gusage <> 22 then raise exception 'N3 grammar usages %, expected 22',v_gusage; end if;

  select count(*) into v_bad from (
    select v.id
    from jp_vocab v left join jp_vocab_examples e on e.vocab_id=v.id
    where v.level='N3'
    group by v.id
    having count(*)<>3 or count(*) filter(where e.example_type='exam')<>1
       or count(*) filter(where e.example_type='daily')<>1
       or count(*) filter(where e.example_type='business')<>1
  ) q;
  if v_bad<>0 then raise exception 'N3 vocab context integrity failures %',v_bad; end if;

  select count(*) into v_bad from jp_vocab where level='N3' and review_status<>'ok';
  if v_bad<>0 then raise exception 'N3 vocab review failures %',v_bad; end if;
  select count(*) into v_bad from jp_kanji where level='N3' and review_status<>'ok';
  if v_bad<>0 then raise exception 'N3 kanji review failures %',v_bad; end if;
  select count(*) into v_bad from jp_grammar where level='N3' and review_status<>'ok';
  if v_bad<>0 then raise exception 'N3 grammar review failures %',v_bad; end if;

  select count(*) into v_bad from (
    select g.id,
      count(*) filter(where e.example_type='standard') std,
      count(*) filter(where e.example_type='daily') daily,
      count(*) filter(where e.example_type='business') business
    from jp_grammar g left join jp_grammar_examples e on e.grammar_id=g.id
    where g.level='N3'
    group by g.id
    having count(*) filter(where e.example_type='standard')<>1
       or count(*) filter(where e.example_type='daily')<>1
       or count(*) filter(where e.example_type='business') not in (0,1)
  ) q;
  if v_bad<>0 then raise exception 'N3 grammar context integrity failures %',v_bad; end if;

  select count(*) into v_bad from jp_grammar g
  where g.level='N3' and position('work_applicability=not_recommended' in coalesce(g.notes,''))>0
    and exists(select 1 from jp_grammar_examples e where e.grammar_id=g.id and e.example_type='business');
  if v_bad<>0 then raise exception 'N3 not_recommended grammar has business example %',v_bad; end if;

  select count(*) into v_bad from jp_grammar g
  where g.level='N3' and position('work_applicability=not_recommended' in coalesce(g.notes,''))=0
    and not exists(select 1 from jp_grammar_examples e where e.grammar_id=g.id and e.example_type='business');
  if v_bad<>0 then raise exception 'N3 eligible grammar missing business example %',v_bad; end if;
end $$;

select 'N3_V5_VALIDATION_PASS' as status,
 (select count(*) from jp_vocab where level='N3') vocab,
 (select count(*) from jp_vocab_examples e join jp_vocab v on v.id=e.vocab_id where v.level='N3') vocab_examples,
 (select count(*) from jp_kanji where level='N3') kanji,
 (select count(*) from jp_kanji_words w join jp_kanji k on k.id=w.kanji_id where k.level='N3') kanji_words,
 (select count(*) from jp_grammar where level='N3') grammar,
 (select count(*) from jp_grammar_examples e join jp_grammar g on g.id=e.grammar_id where g.level='N3') grammar_examples,
 (select count(*) from jp_grammar_usages u join jp_grammar g on g.id=u.grammar_id where g.level='N3') grammar_usages;
