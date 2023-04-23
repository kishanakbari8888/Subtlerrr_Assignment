var server = "sql8.freemysqlhosting.net";
var dabname = "sql8613990";
var username = "sql8613990";
var password = "Cry9uQE9Dg";
var port = "3306";

function sheettosql() {
    var instanceUrl = "jdbc:mysql://"+server + ":" + port+"/"+dabname;
    const conn = Jdbc.getConnection(instanceUrl, username, password);
    const stmt = conn.createStatement();
  
    var doc = SpreadsheetApp.getActiveSpreadsheet() ;
    var sheet = doc.getSheetByName("match");
    var values = sheet.getDataRange().getValues();

     var results = stmt.execute("DROP TABLE abcd");
     let quriy = "CREATE TABLE abcd(p_name varchar(50)"


      Logger.log(values[0].length);
     for(var i=1; i<values[0].length; ++i)
     {
        quriy +=",match"+String(i) + " int";
     }

     quriy += ")";

     Logger.log(quriy);
    results = stmt.execute(quriy);

    // // Logger.log(values);

    for(var i = 1; i<values.length; i++) {
      
      if(!values[i])
        break;
      let a = values[i][0];
      quriy = 'INSERT INTO abcd VALUES (';
      quriy+='"'+a+'"';
      for(var j=1; j<values[i].length; ++j)
      {
        quriy+=", ";
        quriy+=String(values[i][j]);
      }
      quriy+=")";

      results = stmt.execute(quriy);

      Logger.log(quriy);

    }

    results = stmt.execute("select *from abcd");
    Logger.log(results);


    conn.close();
}
