import { Module } from '@nestjs/common'
import { TodosResolver } from './todo.resolvers'
// Resolverを定義した後、PostsModuleへ登録します。
@Module({
  providers: [TodosResolver],
})
export class TodoModule {}
