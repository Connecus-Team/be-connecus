const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const db = require('../config/mysql');
const sql = require('../sql');

const insertFunding = catchAsync(async (req, res) => {
  try {
    const files = req.files || 'NULL';
    const { originalname } = files[0];
    const data = JSON.parse(req.body.params);
    const { title, description, date, totalFunding, interest, walletAddress, tokenAddress } = data;
    const [row] = await db.query(sql.insertFunding, [
      title,
      description,
      interest,
      `/${originalname}`,
      totalFunding,
      date,
      walletAddress,
      tokenAddress,
    ]);
    res.status(httpStatus.CREATED).send({
      result: true,
      data: row.insertId,
      message: 'Insert Funding',
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.CREATED).send({
      result: false,
      data: error,
      message: 'Insert Error',
    });
  }
});
const getFunding = catchAsync(async (req, res) => {
  try {
    const { tokenAddress } = req.query;
    const [row] = await db.query(sql.getFunding, [tokenAddress]);
    res.status(httpStatus.CREATED).send({
      result: true,
      data: row,
      message: 'Funding list',
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.CREATED).send({
      result: false,
      data: error,
      message: 'Funding list error',
    });
  }
});

const insertVoting = catchAsync(async (req, res) => {
  try {
    const files = req.files || 'NULL';
    const { originalname } = files[0];
    const data = JSON.parse(req.body.params);
    const { title, description, date, options, walletAddress, tokenAddress } = data;

    const [row] = await db.query(sql.insertVoting, [
      title,
      description,
      `/${originalname}`,
      date,
      walletAddress,
      tokenAddress,
    ]);
    let insertVotingOptionQuery = null;
    const { insertId } = row;
    try {
      insertVotingOptionQuery = sql.insertVotingOption(options.length);
    } catch (e) {
      res.status(400).send({ result: false, message: 'Add Voting Option Error, Length for voting option >= 1' });
      return;
    }

    await db.query(
      insertVotingOptionQuery,
      options.reduce((prev, e) => {
        return prev.concat([e.content, insertId]);
      }, [])
    );

    res.status(httpStatus.CREATED).send({
      result: true,
      data: row.insertId,
      message: 'Insert Voting',
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.CREATED).send({
      result: false,
      data: error,
      message: 'Insert Error',
    });
  }
});
const getVoting = catchAsync(async (req, res) => {
  try {
    const { tokenAddress } = req.query;
    const [rows] = await db.query(sql.getVoting, [tokenAddress]);
    for (let index = 0; index < rows.length; index += 1) {
      const { id } = rows[index];
      const [optionList] = await db.query(sql.getOptionByVotingId, [id]);
      rows[index].options = optionList;
    }
    res.status(httpStatus.CREATED).send({
      result: true,
      data: rows,
      message: 'Voting List',
    });
  } catch (error) {
    res.status(httpStatus.CREATED).send({
      result: false,
      data: error,
      message: 'Voting list error',
    });
  }
});

const insertTask = catchAsync(async (req, res) => {
  try {
    const files = req.files || 'NULL';
    const { originalname } = files[0];
    const data = JSON.parse(req.body.params);
    const { title, description, date, tasks, walletAddress, tokenAddress } = data;
    const [row] = await db.query(sql.insertTask, [
      title,
      description,
      `/${originalname}`,
      date,
      walletAddress,
      tokenAddress,
    ]);

    let insertTaskOptionQuery = null;
    const { insertId } = row;
    try {
      insertTaskOptionQuery = sql.insertTaskOption(tasks.length);
    } catch (e) {
      res.status(400).send({ result: false, message: 'Add Voting Option Error, Length for voting option >= 1' });
      return;
    }

    await db.query(
      insertTaskOptionQuery,
      tasks.reduce((prev, e) => {
        return prev.concat([e.content, e.amount, insertId]);
      }, [])
    );

    res.status(httpStatus.CREATED).send({
      result: true,
      data: row.insertId,
      message: 'Insert Task',
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.CREATED).send({
      result: false,
      data: error,
      message: 'Insert Error',
    });
  }
});
const insertToken = catchAsync(async (req, res) => {
  try {
    const files = req.files || 'NULL';
    const { originalname } = files[0];
    const data = JSON.parse(req.body.params);
    const { name, symBol, description, walletAddress, tokenAddress, totalSupply, facebookUrl } = data;
    const [row] = await db.query(sql.insertToken, [
      name,
      symBol,
      description,
      tokenAddress,
      walletAddress,
      `/${originalname}`,
      totalSupply,
      facebookUrl,
    ]);

    res.status(httpStatus.CREATED).send({
      result: true,
      data: row.insertId,
      message: 'Insert Token',
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.CREATED).send({
      result: false,
      data: error,
      message: 'Insert Error',
    });
  }
});
const getTask = catchAsync(async (req, res) => {
  try {
    const { tokenAddress } = req.query;
    const [rows] = await db.query(sql.getTask, [tokenAddress]);
    for (let index = 0; index < rows.length; index += 1) {
      const { id } = rows[index];
      const [taskList] = await db.query(sql.getOptionByTaskId, [id]);
      rows[index].tasks = taskList;
    }
    res.status(httpStatus.CREATED).send({
      result: true,
      data: rows,
      message: 'Task list',
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.CREATED).send({
      result: false,
      data: error,
      message: 'Task list error',
    });
  }
});
const getAllToken = catchAsync(async (req, res) => {
  try {
    const [rows] = await db.query(sql.getAllToken);
    res.status(httpStatus.CREATED).send({
      result: true,
      data: rows,
      message: 'Task list',
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.CREATED).send({
      result: false,
      data: error,
      message: 'Task list error',
    });
  }
});
const getTokenInfoByTokenAddress = catchAsync(async (req, res) => {
  try {
    const { tokenAddress } = req.query;
    const [row] = await db.query(sql.getTokenInfoByTokenAddress, [tokenAddress]);
    res.status(httpStatus.CREATED).send({
      result: true,
      data: row.length !== 0 ? row[0] : null,
      message: 'Task list',
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.CREATED).send({
      result: false,
      data: error,
      message: 'Get token information by token address',
    });
  }
});

module.exports = {
  insertFunding,
  getFunding,
  insertVoting,
  getVoting,
  insertTask,
  getAllToken,
  getTask,
  getTokenInfoByTokenAddress,
  insertToken,
};
