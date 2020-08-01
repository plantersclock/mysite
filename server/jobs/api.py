from rest_framework.serializers import ModelSerializer
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend

from jobs import models


class JobSerializer(ModelSerializer):
    class Meta:
        model = models.Job
        fields = ("company", "job_title", "company_image", "skills")


class JobsViewSet(ModelViewSet):
    queryset = models.Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ("company", "job_title")
