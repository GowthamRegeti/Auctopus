# Generated by Django 4.1.3 on 2023-08-29 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone', models.TextField()),
                ('email', models.TextField()),
                ('address', models.TextField()),
                ('college', models.TextField()),
            ],
        ),
    ]