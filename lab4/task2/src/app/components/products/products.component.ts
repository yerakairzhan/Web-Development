import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Case for iPhone 13',
      description: 'Durable and stylish case.',
      rating: 4.5,
      image: './assets/charge.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
    },
    {
      name: 'Set for Phones',
      description: 'Shockproof case with a stand.',
      rating: 4.7,
      image: './assets/pods.png',
      link: 'https://kaspi.kz/shop/p/podstavka-afkas-nova-ak-37-chernyi-107656268/?c=750000000',
    },
    {
      name: 'Case for iPhone 15',
      description: 'Thin silicone case.',
      rating: 4.2,
      image: './assets/chexol.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
    },
    {
      name: 'Xiaomi Redmi 10s',
      description: 'Shockproof case with a stand.',
      rating: 4.8,
      image: './assets/xiaomi.png',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
    },
    {
      name: 'Case for Charge',
      description: 'Durable and stylish case.',
      rating: 4.5,
      image: './assets/chargee.png',
      link: 'https://kaspi.kz/shop/p/cherry-prozrachnyi-113263861/?c=750000000',
    },
    {
      name: 'Case for iPhone 14',
      description: 'Shockproof case with a stand.',
      rating: 4.7,
      image: './assets/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
    {
      name: 'Case for iPhone 15',
      description: 'Thin silicone case.',
      rating: 4.2,
      image: './assets/iphone15.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
    },
    {
      name: 'Case for iPhone 11',
      description: 'Shockproof case with a stand.',
      rating: 4.8,
      image: './assets/iphone11.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000',
    },
    {
      name: 'Case for iPhone 13',
      description: 'Durable and stylish case.',
      rating: 4.5,
      image: './assets/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      name: 'Set for Phones',
      description: 'Shockproof case with a stand.',
      rating: 4.7,
      image: './assets/pods.png',
      link: 'https://kaspi.kz/shop/p/podstavka-afkas-nova-ak-37-chernyi-107656268/?c=750000000',
    },
  ];

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}
