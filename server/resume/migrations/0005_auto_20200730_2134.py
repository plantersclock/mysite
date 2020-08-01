# Generated by Django 3.0.8 on 2020-07-30 21:34

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0004_auto_20200730_1714'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resumepage',
            name='content',
            field=wagtail.core.fields.StreamField([('jobs', wagtail.core.blocks.StructBlock([('company', wagtail.core.blocks.CharBlock(max_length=50, required=True)), ('company_image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('job_title', wagtail.core.blocks.CharBlock(max_length=100, required=True)), ('experiences', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('experience', wagtail.core.blocks.TextBlock(max_length=500, required=True)), ('skills', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('skill', wagtail.core.blocks.CharBlock(help_text='What is a skill\n                                                    that was used', max_lengeth=50, required=True))])))]), icon='edit', label='Job Exeperiences / Tasks'))]))], blank=True, null=True),
        ),
    ]
