const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //insert datas in the table
  /*await saveOrphanage(db, {
            lat: "-20.2892542",
            lng: "-40.3137849",
            name: "Lar dos meninos",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp: "99249019410294",
            images: [
                "https://images.unsplash.com/photo-1570662518230-e097e6620e12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
                "https://images.unsplash.com/photo-1600711725042-deb9fbaeb1e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
    
            instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para doar.",
    
            opening_hours: "Horário de visitas Das 18h até 8h",
    
            open_on_weekends: "0"
        
    })
    */

  //consult datas in the table

  //const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  //console.log(selectedOrphanages);

  /*//consult only one oprhanage with the id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
    */
  //deletar um dado da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"));
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"));
  console.log(await db.run("DELETE FROM orphanages WHERE id = '9'"));

  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);
});
