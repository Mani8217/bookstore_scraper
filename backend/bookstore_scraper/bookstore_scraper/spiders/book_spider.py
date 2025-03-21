# book_spider.py
import re

import scrapy

class BookSpider(scrapy.Spider):
    name = 'BookSpider'
    start_urls = [
        'https://books.toscrape.com'
    ]

    def parse(self, response):
        for book in response.css('.product_pod'):
            price = book.css('.price_color::text').get()
            price = re.sub(r'[^\d\.]', '', price)  
            price = float(price)

            yield {
                'image': book.css('img::attr(src)').get(),
                'name': book.css('h3 a::attr(title)').get(),
                'price': price
            }

        next_page = response.css('li.next a::attr(href)').get()
        if next_page:
            yield response.follow(next_page, self.parse)
