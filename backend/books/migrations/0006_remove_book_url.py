# Generated by Django 4.2 on 2025-03-22 13:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0005_alter_book_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='url',
        ),
    ]
