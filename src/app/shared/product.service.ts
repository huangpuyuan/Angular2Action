import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 1.5, "这是一个商品，Angular组件学习之旅", ["电子产品", "硬件设施"]),
    new Product(2, "第二个商品", 2.99, 3.5, "这是二个商品，Angular组件学习之旅", ["硬件设施"]),
    new Product(3, "第三个商品电子", 3.99, 2.5, "这是三个商品，Angular组件学习之旅", ["电子产品", "硬件设施"]),
    new Product(4, "第四个商品电子", 4.99, 4.5, "这是四个商品，Angular组件学习之旅", ["电子产品", "硬件设施"]),
    new Product(5, "第五个商品", 5.99, 3.5, "这是五个商品，Angular组件学习之旅", ["电子产品"]),
    new Product(6, "第六个商品", 6.99, 5, "这是六个商品，Angular组件学习之旅", ["图书"])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, "2017-4-17 14:52:42", "张三", 3, "东西不错"),
    new Comment(2, 1, "2017-4-14 11:52:42", "李四", 4, "好东西呀"),
    new Comment(3, 1, "2017-4-18 12:52:42", "王五", 2, "质量太差"),
    new Comment(4, 2, "2017-4-19 13:52:42", "赵六", 4, "东西不错")
  ]

  constructor() {
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProuctId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}
export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}

export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {

  }
}
