const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const db = require('../config/mysql');
const sql = require('../sql');

const insertFunding = catchAsync(async (req, res) => {
  try {
    const { title, description, date, totalFunding, interest } = req.body;
    const [row] = await db.query(sql.insertFunding, [title, description, interest, '`update', totalFunding, date]);
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

const insertVoting = catchAsync(async (req, res) => {
  try {
    const { title, description, date, options } = req.body;

    const [row] = await db.query(sql.insertVoting, [title, description, 'link', date]);
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

const insertTask = catchAsync(async (req, res) => {
  try {
    const { title, description, date, tasks } = req.body;
    const [row] = await db.query(sql.insertTask, [title, description, 'link', date]);

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

module.exports = {
  insertFunding,
  insertVoting,
  insertTask,
};
