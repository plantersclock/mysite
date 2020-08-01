from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register

from .models import Job


class JobAdmin(ModelAdmin):
    """Jobs Admin"""

    model = Job
    menu_label = "Jobs"
    menu_icon = "placeholder"
    menu_order = 290
    add_to_settings_menu = False
    exclude_from_explored = False
    list_display = (
        "company",
        "job_title",
    )
    search_fields = (
        "company",
        "job_title",
    )


modeladmin_register(JobAdmin)
