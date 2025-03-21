# pipelines.py

import mysql.connector

class MySQLPipeline:
    def open_spider(self, spider):
        # اتصال به پایگاه داده MySQL
        self.conn = mysql.connector.connect(
            host='localhost',
            database='bookstore_scraper',
            user='root',
            password='Mani5530'
        )
        self.cursor = self.conn.cursor()
    
    def close_spider(self, spider):
        # بستن اتصال به پایگاه داده
        self.conn.commit()
        self.cursor.close()
        self.conn.close()

    def process_item(self, item, spider):
        # ذخیره اطلاعات در دیتابیس
        self.cursor.execute("""
            INSERT INTO books (image, name, price) 
            VALUES (%s, %s, %s)
        """, (item['image'], item['name'], item['price']))
        return item
