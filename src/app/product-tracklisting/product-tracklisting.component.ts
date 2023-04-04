import { Component, OnInit } from '@angular/core';

import { ProductService } from 'app/product.service';

import { Album } from 'app/album';

@Component({
  selector: 'app-product-tracklsiting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subsribe(response =>
      this.albumInfo = response);
  }

}
