import { URL } from "url";

const url = new URL("https://nodejs.org/api/url.html");

url.host = "www.example.com";
url.searchParams.append("status", "user");

console.info(url.toString());
console.info(url.protocol);
console.info(url.host);
console.info(url.pathname);
console.info(url.searchParams);
