from wagtail.contrib.modeladmin.options import (
    ModelAdmin,
    ModelAdminGroup,
    modeladmin_register,
)

from blog.models import Job, Skill


class JobsAdmin(ModelAdmin):
    model = Job
    menu_label = "Jobs"
    menu_icon = "pilcrow"
    # menu_order = 200
    # add_to_settings_menu = False
    # exclude_from_explorer = False
    list_display = ("name",)
    list_filter = ("name", "skills",)
    search_fields = ("name",)


class SkillsAdmin(ModelAdmin):
    model = Skill
    menu_label = "Skills"
    menu_icon = "pilcrow"
    # menu_order = 200
    # add_to_settings_menu = False
    # exclude_from_explorer = False
    list_display = ("label",)
    list_filter = ("label", "skills")
    search_fields = ("label", "skills")


class EmploymentGroup(ModelAdminGroup):
    menu_label = "Employment"
    menu_icon = "folder-open-inverse"
    menu_order = 900
    items = (JobsAdmin, SkillsAdmin)


modeladmin_register(EmploymentGroup)
