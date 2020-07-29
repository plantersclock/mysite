from rest_framework.serializers import ModelSerializer, StringRelatedField
from rest_framework.viewsets import ModelViewSet

from blog import models


class JobSerializer(ModelSerializer):
    # TODO: This serializer isn't working.
    # I think I must have set up tagging improperly in
    # blog.models because I can't figure out how to query
    # jobs by skill labels.
    skills = StringRelatedField(many=True)

    class Meta:
        model = models.Job
        fields = (
            "name",
            "description",
            "organization",
            "skills"
        )


class JobsViewSet(ModelViewSet):
    queryset = models.Job.objects.all()
    serializer_class = JobSerializer
