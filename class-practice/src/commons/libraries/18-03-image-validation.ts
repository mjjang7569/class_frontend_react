export const checkValidationFile = (file?: File) => {
  if (typeof file === 'undefined') {
    alert('파일이 없습니다.');
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    alert('파일의 용량이 너무 큽니다');
    return false;
  }
  if (!file.type.includes('jpeg') && !file.type.includes('png')) {
    alert('jpeg 또는 png파일만 업로드 가능합니다.');
    return false;
  }

  return true;
};
