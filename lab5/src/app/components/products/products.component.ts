import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-products',
  standalone: true,
  styleUrls: ['./products.component.css'],
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  categories = ['Xiaomi', 'Apple', 'Samsung', 'Google'];
  selected = 'Xiaomi';
likedProduc:Set<number> = new Set<number>()
  products = [
    // Xiaomi Products
    { id: 6, category: 'Xiaomi', name: 'Xiaomi 13', description: 'Flagship phone.', rating: 4.7, likes: 0, image: './assets/xiaomi12.jpg', link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-4g-nfc-8-gb-256-gb-chernyi-115994720/?m=18599255&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA7fZaLPcZkdoQQ2D4A1_2wbjiQ5CpzPDsFdSjeBPzZU0Erv_m6cECRoCdfgQAvD_BwE' },
    { id: 7, category: 'Xiaomi', name: 'Redmi Note 11', description: 'Affordable smartphone.', rating: 4.5, likes: 0, image: './assets/redmi11.png', link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-4-gb-128-gb-goluboi-103624818/?m=8546012&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA92hC9G9DjoNIBnC1Z88ep9ZlqYoFiWFFk8TMwUfqL3T029fR_r8VRoC-ggQAvD_BwE' },
    { id: 8, category: 'Xiaomi', name: 'Mi Pad 5', description: 'High-performance tablet.', rating: 4.6, likes: 0, image: './assets/mipad.png', link: 'https://xiaomi.com' },
    { id: 9, category: 'Xiaomi', name: 'Mi Band', description: 'Fitness tracker.', rating: 4.4, likes: 0, image: './assets/miband.png', link: 'https://xiaomi.com' },
    { id: 10, category: 'Xiaomi', name: 'Xiaomi Laptop Pro', description: 'Thin and powerful laptop.', rating: 4.7, likes: 0, image: './assets/milaptop.png', link: 'https://xiaomi.com' },

    // Apple Products
    { id: 1, category: 'Apple', name: 'iPhone 14', description: 'Latest Apple iPhone.', rating: 4.8, likes: 0, image: './assets/iphone14.jpg', link: 'https://apple.com' },
    { id: 2, category: 'Apple', name: 'MacBook Pro', description: 'Powerful laptop.', rating: 4.9, likes: 0, image: './assets/macbook.png', link: 'https://apple.com' },
    { id: 3, category: 'Apple', name: 'iPad Pro', description: 'Best tablet for professionals.', rating: 4.7, likes: 0, image: './assets/ipad.png', link: 'https://apple.com' },
    { id: 4, category: 'Apple', name: 'AirPods Pro', description: 'Noise-canceling earphones.', rating: 4.6, likes: 0, image: './assets/airpods.png', link: 'https://apple.com' },
    { id: 5, category: 'Apple', name: 'Apple Watch', description: 'Smart wearable.', rating: 4.8, likes: 0, image: './assets/watch.png', link: 'https://apple.com' },


    // Samsung Products
    { id: 11, category: 'Samsung', name: 'Galaxy S23', description: 'Premium smartphone.', rating: 4.8, likes: 0, image: './assets/s1.png', link: 'https://samsung.com' },
    { id: 12, category: 'Samsung', name: 'Galaxy Tab S8', description: 'High-end tablet.', rating: 4.6, likes: 0, image: './assets/s2.png', link: 'https://samsung.com' },
    { id: 13, category: 'Samsung', name: 'Galaxy Buds 2', description: 'Wireless earbuds.', rating: 4.5, likes: 0, image: './assets/s3.png', link: 'https://samsung.com' },
    { id: 14, category: 'Samsung', name: 'Galaxy Watch 5', description: 'Smartwatch.', rating: 4.7, likes: 0, image: './assets/s4.png', link: 'https://samsung.com' },
    { id: 15, category: 'Samsung', name: 'Samsung Laptop', description: 'Sleek and powerful laptop.', rating: 4.7, likes: 0, image: './assets/s5.png', link: 'https://samsung.com' },

    // Google Products
    { id: 16, category: 'Google', name: 'Pixel 7', description: 'Google’s flagship phone.', rating: 4.8, likes: 0, image: './assets/q1.png', link: 'https://store.google.com' },
    { id: 17, category: 'Google', name: 'Pixel Tablet', description: 'Google’s best tablet.', rating: 4.6, likes: 0, image: './assets/q2.png', link: 'https://store.google.com' },
    { id: 18, category: 'Google', name: 'Pixel Buds', description: 'Wireless earbuds.', rating: 4.5, likes: 0, image: './assets/q3.png', link: 'https://store.google.com' },
    { id: 19, category: 'Google', name: 'Google Nest Hub', description: 'Smart home display.', rating: 4.7, likes: 0, image: './assets/q4.png', link: 'https://store.google.com' },
    { id: 20, category: 'Google', name: 'Google Chromebook', description: 'Fast and secure laptop.', rating: 4.7, likes: 0, image: './assets/q5.png', link: 'https://store.google.com' }
  ];

  getfilteredProducts() {
    return this.products.filter(product => product.category === this.selected);
  }

  selectCategory(event: any) {
    this.selected = event?.target.value;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  likeProduct(id: number) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      if(this.likedProduc.has(id)) {
        product.likes -= 1;
        this.likedProduc.delete(product.id)
      }
      else {
        product.likes += 1;
        this.likedProduc.add(product.id)
      }
    }
  }

  shareProduct(link: string, platform: 'whatsapp' | 'telegram') {
    const shareUrls = {
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(link)}`,
    };

    window.open(shareUrls[platform], '_self');
  }

}
