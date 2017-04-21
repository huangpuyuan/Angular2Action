import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService, Comment} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = '';
  isCommentHidden = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    // this.comments = this.productService.getCommentsForProuctId(productId);
    // this.product = this.productService.getProduct(productId);
    let productId: number = this.routeInfo.snapshot.params['productId'];
    this.productService.getProduct(productId).subscribe(
      product => this.product = product
    );
    this.productService.getCommentsForProuctId(productId).subscribe(
      comments => this.comments = comments
    );

  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString()
      , "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);
    // reduce 方法进行总分的重新设计
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    // 重置初值状态
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
