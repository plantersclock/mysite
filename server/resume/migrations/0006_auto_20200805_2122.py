# Generated by Django 3.0.8 on 2020-08-05 21:22

from django.db import migrations, models
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0005_auto_20200730_2134'),
    ]

    operations = [
        migrations.AddField(
            model_name='resumepage',
            name='about',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='resumepage',
            name='email',
            field=models.EmailField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='resumepage',
            name='job_titles',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='resumepage',
            name='linked_in',
            field=models.URLField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='resumepage',
            name='location',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='resumepage',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='resumepage',
            name='content',
            field=wagtail.core.fields.StreamField([('jobs', wagtail.core.blocks.StructBlock([('company', wagtail.core.blocks.CharBlock(max_length=50, required=True)), ('company_image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('job_title', wagtail.core.blocks.CharBlock(max_length=100, required=True)), ('experiences', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('experience', wagtail.core.blocks.TextBlock(max_length=500, required=True)), ('skills', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('skill', wagtail.core.blocks.CharBlock(help_text='What is a skill\n                                                    that was used', max_lengeth=50, required=True))])))]), icon='edit', label='Job Experiences and Tasks'))]))], blank=True, null=True),
        ),
    ]