const query = `https://api.github.com/users/quackware/starred`;
const jsonResponse = await fetch(query).then((resp) => resp.json());
await Deno.writeTextFile("out.json", JSON.stringify(jsonResponse));
