from graphene_django import DjangoObjectType
import graphene
from .models import AppSettingModel


class AppSetting(DjangoObjectType):
    class Meta:
        model = AppSettingModel
        fields = '__all__'


class AppSettingQuery(graphene.ObjectType):
    appSettings = graphene.List(AppSetting)

    def resolve_appSettings(self, info):
        return AppSettingModel.objects.all()


class AppSettingMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        type = graphene.String(required=True)
        value = graphene.String(required=True)

    appSetting = graphene.Field(AppSetting)

    @staticmethod
    def mutate(self, info, name, type, value):
        app_setting = AppSettingModel.objects.filter(name=name).first()
        if app_setting is None:
            app_setting = AppSettingModel.objects.create(
                name=name,
                type=type,
                value=value
            )
        else:
            app_setting.type = type
            app_setting.value = value
        app_setting.save()
        return AppSettingMutation(appSetting=app_setting)


class Mutation(graphene.ObjectType):
    add_app_setting = AppSettingMutation.Field()


schema = graphene.Schema(query=AppSettingQuery, mutation=Mutation)