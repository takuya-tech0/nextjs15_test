export default async function fetchCustomers() {
  // 環境変数の値をログ出力
  console.log('API_ENDPOINT value:', process.env.API_ENDPOINT);
  
  // 完全なURLをログ出力
  const fullUrl = process.env.API_ENDPOINT + '/allcustomers';
  console.log('Full URL:', fullUrl);

  const res = await fetch(fullUrl, { cache: "no-cache" });
  
  // レスポンスの状態もログ出力
  console.log('Response status:', res.status);
  console.log('Response ok:', res.ok);

  if (!res.ok) {
    throw new Error('Failed to fetch customers');
  }
  return res.json();
}

// export default async function fetchCustomers() {
//   const res = await fetch(process.env.API_ENDPOINT+'/allcustomers', { cache: "no-cache" });
//   if (!res.ok) {
//     throw new Error('Failed to fetch customers');
//   }
//   return res.json();
// }


// export default async function fetchCustomers() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/allcustomers`, { 
//       cache: "no-cache" 
//   });
//   if (!res.ok) {
//       throw new Error('Failed to fetch customers');
//   }
//   return res.json();
// }

// export default async function fetchCustomers() {
//   const res = await fetch('http://127.0.0.1:5000/allcustomers', { 
//       cache: "no-cache" 
//   });
  
//   if (!res.ok) {
//       throw new Error('Failed to fetch customers');
//   }
//   return res.json();
// }