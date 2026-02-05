function thanksMail() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("フォームの回答 1");
  const rows = sheet.getDataRange().getValues();
  const latestRow = rows[rows.length - 1];

  const name = latestRow[1];
  const email = latestRow[2];
  const satisfaction = latestRow[3];
  const comment = latestRow[4];

  const subject = "イベントへのご参加、ありがとうございました";

  let body =
`${name}様

この度はイベントにご参加いただき、誠にありがとうございました。`;

  if (satisfaction === "非常に満足") {
    body += `

イベントの内容に非常に満足していただけたとのことで、私たちも大変嬉しく思います。`;
  } else if (satisfaction === "満足") {
    body += `

イベントの内容にご満足いただけたとのことで、安心いたしました。`;
  } else if (satisfaction === "普通") {
    body += `

イベントに対する率直なご意見をいただき、ありがとうございます。`;
  } else {
    body += `

ご期待に添えなかった点があったとのこと、心よりお詫び申し上げます。`;
  }

  body += `

今後もより良いイベントをお届けできるよう努めてまいります。
引き続きよろしくお願いいたします。`;

  GmailApp.sendEmail(email, subject, body);
}
