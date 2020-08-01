from django.db import models

# from modelcluster.contrib.taggit import ClusterTaggableManager
from modelcluster.fields import ParentalKey

from modelcluster.models import ClusterableModel

# from taggit.models import TaggedItemBase
from wagtail.core.models import Orderable
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel
from wagtail.images.edit_handlers import ImageChooserPanel

# Create your models here.


class JobSkill(Orderable):
    content_object = ParentalKey(
        "jobs.Job",
        related_name="skills",
        on_delete=models.CASCADE,
        blank=False,
    )
    label = models.CharField(max_length=32)

    panels = [FieldPanel("label")]

    def __str__(self):
        return self.label


class Job(ClusterableModel):
    """A Jobs Model"""

    company = models.CharField(
        max_length=50, blank=False, null=False, help_text="Company Name"
    )
    job_title = models.CharField(
        max_length=50, blank=False, null=False, help_text="Job Title"
    )
    company_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    # job_skills = ClusterTaggableManager(through=JobSkill, blank=True)

    panels = [
        FieldPanel("company"),
        FieldPanel("job_title"),
        ImageChooserPanel("company_image"),
        InlinePanel("skills", heading="Skills"),
    ]

    def __str__(self):
        """string repr of this model"""
        return self.company
