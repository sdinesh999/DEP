function countWords(str) {
    if(str.trim()==""){
    return 0;
    }
    return str.trim().split(/\s+/).length;
  }