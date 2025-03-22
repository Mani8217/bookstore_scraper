# pipelines.py

import mysql.connector

class MySQLPipeline:
    def open_spider(self, spider):
        self.conn = mysql.connector.connect(
            host='localhost',
            database='books_scraping',
            user='root',
            password='Mani5530'
        )
        self.cursor = self.conn.cursor()
    
    def close_spider(self, spider):
        self.conn.commit()
        self.cursor.close()
        self.conn.close()

    def process_item(self, item, spider):
        self.cursor.execute("""
            INSERT INTO books (image, name, price, url) 
            VALUES (%s, %s, %s, %s)
        """, (item['image'], item['name'], item['price'],item['url']))
        return item
