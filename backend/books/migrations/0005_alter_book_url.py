# Generated by Django 4.2 on 2025-03-22 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_alter_book_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='url',
            field=models.TextField(default='http://default.url'),
            preserve_default=False,
        ),
    ]
