export interface RecipeInterface {
  id?: string;
  title: string;
  poster: string;
  category: string;
  time: string;
  ingridiens: Array<{name: string}>;
  desc: string;
}
