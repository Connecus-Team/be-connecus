module.exports = {
  // INSERT
  insertFunding:
    'INSERT INTO ceus_funding (title, description, joiner_interest, link, funding_money, time, wallet_address)  VALUES (?, ?, ?, ?, ?, ?,?)',
  insertVoting: 'INSERT INTO ceus_voting (title, description, link, time, wallet_address)  VALUES (?, ?, ?,?,?)',
  insertTask: 'INSERT INTO ceus_task (title, description, link, time, wallet_address)  VALUES (?, ?, ?, ?, ?)',
  insertVotingOption: (voteOption = 1) => {
    if (voteOption < 1) throw new Error('voteOption count error');
    let query = 'INSERT INTO ceus_voting_option ( content, voting_id) VALUES';

    for (let i = 0; i < voteOption; i += 1) {
      query += '(?, ?)';
      if (i + 1 !== voteOption) query += ' , ';
    }
    return query;
  },
  insertTaskOption: (taskOption = 1) => {
    if (taskOption < 1) throw new Error('taskOption count error');
    let query = 'INSERT INTO ceus_task_option( content, reward, task_id) VALUES';

    for (let i = 0; i < taskOption; i += 1) {
      query += '(?, ?,?)';
      if (i + 1 !== taskOption) query += ' , ';
    }
    console.log('task', query);
    return query;
  },
};
