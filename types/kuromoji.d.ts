declare module "kuromoji" {
  interface Token {
    word_position?: number;
    surface_form: string;
    reading?: string;
    pos?: string;
    pos_detail_1?: string;
    basic_form?: string;
  }

  interface Tokenizer {
    tokenize(text: string): Token[];
  }

  interface Builder {
    build(callback: (error: Error | null, tokenizer?: Tokenizer) => void): void;
  }

  const kuromoji: {
    builder(options: { dicPath: string }): Builder;
  };

  export default kuromoji;
}
