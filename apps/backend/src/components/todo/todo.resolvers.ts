import { Query, Resolver } from '@nestjs/graphql'
import { TodoModel } from './interfaces/todo.model'

// @Resolver((of) => PostModel): PostModelに
//相当するスキーマを返すことを宣言しています。
// つまり、このクラスでPostModelへ書いた
// すべてのフィールドのデータを取得できることを意味します

@Resolver((of) => TodoModel)
export class TodosResolver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // postsというクエリが呼ばれたらこのメソッドを実行する動きになります

  @Query(() => [TodoModel], { name: 'todos', nullable: true })
  async getTodos() {
    return [
      {
        id: '1',
        title: 'Nest JS TODO',
      },
      {
        id: '2',
        title: 'GraphQL TODO',
      },
    ]
  }
}
