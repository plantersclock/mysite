"""Streamfields liv ein here"""

from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class Jobs(blocks.StructBlock):
    """This will be company and experience"""

    company = blocks.CharBlock(required=True, max_length=50)
    company_image = ImageChooserBlock(required=True)
    job_title = blocks.CharBlock(required=True, max_length=100)

    experiences = blocks.ListBlock(
        blocks.StructBlock(
            [
                (
                    "experience",
                    blocks.TextBlock(required=True, max_length=500),
                ),
                (
                    "skills",
                    blocks.ListBlock(
                        blocks.StructBlock(
                            [
                                (
                                    "skill",
                                    blocks.CharBlock(
                                        required=True,
                                        max_lengeth=50,
                                        help_text="""What is a skill
                                                    that was used""",
                                    ),
                                )
                            ]
                        ),
                    ),
                ),
            ]
        ),
        label="Job Experiences and Tasks",
        icon="edit",
    )

    def get_api_representation(self, value, context=None):

        experiences = []

        for experience in value.get("experiences"):
            print(experience.get("experience"))
            skills = []
            for skill in experience.get("skills"):
                skills.append(skill.get("skill"))
            experience_dict = {
                "experience": experience.get("experience"),
                "skills": skills,
            }
            experiences.append(experience_dict)

        api_result = {
            "company": value.get("company"),
            "job_title": value.get("job_title"),
            "company_image": value.get("company_image").file.url,
            "company_image_w600": value.get("company_image")
            .get_rendition("width-600")
            .file.url,
            "experiences": experiences,
        }

        return api_result

    class Meta:
        icon = "edit"
        label = "Jobs"
