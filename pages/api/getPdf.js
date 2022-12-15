import  stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'https://firebasestorage.googleapis.com/v0/b/fundacionindex-6258e.appspot.com/o/INFORMEANUAL2020.pdf?alt=media&token=e27ff48f-329b-487f-a227-d0dbcdf44fd3';

const handler = async (req, res) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=INFORMEANUAL2020.pdf');
  await pipeline(response.body, res);
};

export default handler;