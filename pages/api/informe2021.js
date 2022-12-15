import  stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'https://firebasestorage.googleapis.com/v0/b/fundacionindex-6258e.appspot.com/o/INFORME%20DE%20ACTIVIDADES%202021.pdf?alt=media&token=7c21a124-cac8-46fe-8f20-0d1030092266';

const handler = async (req, res) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=INFORMEANUAL2021.pdf');
  await pipeline(response.body, res);
};

export default handler;