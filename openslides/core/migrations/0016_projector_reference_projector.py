# Generated by Django 2.1.5 on 2019-01-31 10:24

from django.db import migrations, models

import openslides.utils.models


class Migration(migrations.Migration):

    dependencies = [("core", "0015_auto_20190122_1216")]

    operations = [
        migrations.AddField(
            model_name="projector",
            name="reference_projector",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=openslides.utils.models.SET_NULL_AND_AUTOUPDATE,
                related_name="references",
                to="core.Projector",
            ),
        )
    ]
