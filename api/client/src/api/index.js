// client/src/api/index.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3080/api',
});

export const insertMember = (payload) => api.post(`/member`, payload);
export const getAllMembers = () => api.get(`/member`);
export const updateMemberById = (id, payload) =>
  api.put(`/member/${id}`, payload);
export const deleteMemberById = (id) => api.delete(`/member/${id}`);
export const getMemberById = (id) => api.get(`/member/${id}`);

const apis = {
  insertMember,
  getAllMembers,
  updateMemberById,
  deleteMemberById,
  getMemberById,
};

export default apis;
