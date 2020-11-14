'use strict';
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: process.env.REGION});
const { v4: uuidv4 } = require('uuid'); // npm i --save uuid ※functionフォルダで実行

exports.handler = async (event) => {

  // UUID生成
  const newid = uuidv4();

  // 書き込み
  const put_params = {
    TableName: 'Blog-vbzxiaya4vaufnwli7qlppj4ti-dev', // 予測不能ならクライアントからの引数でもいい
    Item: {
      'id': newid, // idは必須?
      'name' : 'randam-' + Math.random(1)
    }
  }

  // 結果を待つ
  try {
    await docClient.put(put_params).promise()
  } catch (e) {
    console.log(e.message)
  }

  // 読み込みの結果処理用のコールバック
  var resItemValue = 'none';
  const callback = (err, res) => {
    if (!err) {
      resItemValue = res.Item.name;
    } else {
      resItemValue = 'error';
    }
  };

  // 書き込んだものを読み込み
  const get_params = {
    TableName: 'Blog-vbzxiaya4vaufnwli7qlppj4ti-dev', // 予測不能ならクライアントからの引数でもいい
    Key: {
      'id': newid,
    }
  }

  // 結果を待つ
  try {
    await docClient.get(get_params, callback).promise()
  } catch (e) {
    console.log(e.message)
  }

  // クライアントに返す
  return {
    status: 200,
    headers: {"Access-Control-Allow-Origin": "*"},
    body : JSON.stringify({
      test: process.env.MY_TEST_KEY,
      resItemValue: resItemValue,
    })
  };;
};


