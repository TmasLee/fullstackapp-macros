export function emptyQuery(){
  let msg = 'Empty Query. Try Again.';
  return {
    type: 'EMPTY_QUERY',
    data: {
      msg: msg
    }
  }
}