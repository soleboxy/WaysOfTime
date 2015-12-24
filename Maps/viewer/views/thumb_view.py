import os
from django.http import JsonResponse
from viewer.models import Maps, MyMaps
from django.db.models import Q

def getThumbs(request, stringToSearch):
    """
    :param request: http get request (no params ofc)
    :return: reutrns all the available thumbnails fof the uploaded maps
    """

    if stringToSearch != 'null':
        maps = Maps.objects.filter(Q(title__contains=stringToSearch)|Q(description__contains=stringToSearch)|Q(subject_area__contains=stringToSearch)|Q(cached_tag_list__contains=stringToSearch))
    else:
        maps = Maps.objects.all()

    return makeJsonReq(request, maps);


def makeJsonReq(request, maps):
    """
    this is doc
    """
    url = "http://localhost:3000/uploads/{id}/thumb/{thumb_name_ext_stripped}.png"
    path = "/uploads/thumb/{thumb_name_ext_stripped}.png"
    results = []
    for map in maps:
        thumb_file_name, ext = os.path.splitext(map.upload_file_name)
        results.append({'id': map.id,
                        'title': map.title,
                       'url': url.format(id=map.id,
                                         thumb_name_ext_stripped=thumb_file_name),
                        'path': path.format(id=map.id,
                                            thumb_name_ext_stripped=thumb_file_name)})

    return JsonResponse(results, safe=False)
