# Generated by Django 3.0.8 on 2020-07-23 22:47

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('wagtailcore', '0045_assign_unlock_grouppagepermission'),
        ('wagtailredirects', '0006_redirect_increase_max_length'),
        ('wagtailforms', '0004_add_verbose_name_plural'),
        ('contenttypes', '0002_remove_content_type_name'),
        ('wagtailimages', '0022_uploadedimage'),
        ('home', '0004_auto_20200723_1834'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='BlogPage',
            new_name='HomePage',
        ),
    ]
