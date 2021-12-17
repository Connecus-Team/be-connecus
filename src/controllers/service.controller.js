const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const db = require('../config/mysql');
const sql = require('../sql');

const insertFunding = catchAsync(async (req, res) => {
  try {
    const { title, description, date, totalFunding, interest, walletAddress } = req.body;
    const [row] = await db.query(sql.insertFunding, [
      title,
      description,
      interest,
      '`update',
      totalFunding,
      date,
      walletAddress,
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
    const { walletAddress } = req.query;
    const [row] = await db.query(sql.getFunding, [walletAddress]);
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
    const { title, description, date, options, walletAddress } = req.body;

    const [row] = await db.query(sql.insertVoting, [title, description, 'link', date, walletAddress]);
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
    const { walletAddress } = req.query;
    const [rows] = await db.query(sql.getVoting, [walletAddress]);
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
    const { title, description, date, tasks, walletAddress } = req.body;
    const [row] = await db.query(sql.insertTask, [title, description, 'link', date, walletAddress]);

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
const getTask = catchAsync(async (req, res) => {
  try {
    const { walletAddress } = req.query;
    const [rows] = await db.query(sql.getTask, [walletAddress]);
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

module.exports = {
  insertFunding,
  getFunding,
  insertVoting,
  getVoting,
  insertTask,
  getAllToken,
  getTask,
};
