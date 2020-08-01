# Generated by Django 3.0.8 on 2020-07-30 00:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0004_auto_20200729_2342'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='jobskill',
            options={'ordering': ['sort_order']},
        ),
        migrations.RemoveField(
            model_name='job',
            name='job_skills',
        ),
        migrations.RemoveField(
            model_name='jobskill',
            name='tag',
        ),
        migrations.AddField(
            model_name='jobskill',
            name='sort_order',
            field=models.IntegerField(blank=True, editable=False, null=True),
        ),
    ]