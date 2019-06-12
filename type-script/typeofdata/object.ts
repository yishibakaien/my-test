declare function create(o: object | null): void;
create({prop: 0})
create(null)
create(undefined)

create(false) // 错误示例
create('name') // 错误示例