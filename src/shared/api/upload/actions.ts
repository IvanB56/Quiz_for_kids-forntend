import {API_URL} from '@/shared/constants';
import {api} from '@/shared/api/api-controller';

type UploadOptions = {
  fieldName?: string;
};

export async function uploadReportPhotos(files: File[], url: string, opts: UploadOptions = {}) {
  await api.setCSRF();

  const formData = new FormData();
  const field = opts.fieldName ?? 'files';
  files.forEach((file) => formData.append(field + '[]', file));

  return await api.post(`${API_URL}/${url}`, {
    headers: {
      'Accept': 'application/json',
      'X-XSRF-TOKEN': await api.getCSRF(),
      // Do NOT set Content-Type; the browser will set proper multipart boundary
    },
    credentials: 'include',
    body: formData,
  });
}


