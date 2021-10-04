import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICreateCategoriesRepository {
  create({ description, name }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICreateCategoryDTO, ICreateCategoriesRepository };
