'use client'
import * as React from 'react';
import '../page.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from '@mui/material/Button';

function createData(
    id: string,
    Vendor: string,
    Location: string,
    Createdtime: string,
    Scrap_quantityc: string,
    Money_generated: string
) {
    
    return { id, Vendor, Location, Createdtime, Scrap_quantityc,Money_generated };
}

const rows = [
    createData('1', 'Điện máy xanh', 'Hà Nội', '20/11/2024', '100','120.000'),
    createData('2', 'Điện máy xanh', 'Hà Nội', '20/11/2024', '100','120.000'),
    createData('3', 'Thế giới di động', 'Hà Nội', '20/11/2024', '100','120.000'),
    createData('4', 'Cellphone S', 'Hà Nội', '20/11/2024', '100','120.000'),
    createData('5', 'Trái cây nhập khẩu', 'Hà Nội', '20/11/2024', '100','120.000'),
];

export default function BasicTable() {
    const handleAdd = (id: string) => {
        console.log(`Add clicked for row ${id}`);
        // Thêm logic xử lý cho Add ở đây
    };

    const handleRemove = (id: string) => {
        console.log(`Remove clicked for row ${id}`);
        // Thêm logic xử lý cho Remove ở đây
    };

    return (
        <div className='header'>
            <ul className="list-item">
                <li>Order</li>
                <li>Drivers</li>
                <li>Stores</li>
                <li>Vendors</li>
                <li>Escalations</li>
            </ul>
            {/* Table */}
            <div className="product-table">
                <h1 className="name-product">Store Management</h1>
                <div className="option-location">
                    <SearchIcon className="icon-search" />
                    <input type="text" id="fname" name="fname" placeholder="Search for vendor name" />
                    <select id="city" name="city">
                        <option value="Tp Hồ Chí Minh">Tp Hồ Chí Minh</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Hà Nam">Hà Nam</option>
                        <option value="Hải Phòng">Hải Phòng</option>
                    </select>
                    <select id="store" name="store">
                        <label>Store</label>
                        <option value="Tp Hồ Chí Minh">Tp Hồ Chí Minh</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Hà Nam">Hà Nam</option>
                        <option value="Hải Phòng">Hải Phòng</option>
                    </select>
                </div>
                <div className="add-vendor">
                    <AddIcon />
                    <p className="add">Add Store</p>
                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Store</TableCell>
                                <TableCell align="right">Location</TableCell>
                                <TableCell align="right">Createdtime</TableCell>
                                <TableCell align="right">Scrap_quantityc</TableCell>
                                <TableCell align="right">Money_generated</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.Vendor}</TableCell>
                                    <TableCell align="right">{row.Location}</TableCell>
                                    <TableCell align="right">{row.Createdtime}</TableCell>
                                    <TableCell align="right">{row.Scrap_quantityc}</TableCell>
                                    <TableCell align="right">{row.Money_generated}</TableCell>
                                    <TableCell align="right">
                                        <Button 
                                            variant="outlined" 
                                            color="primary" 
                                            onClick={() => handleAdd(row.id)}
                                            style={{ marginRight: '8px' }}
                                        >
                                            Add
                                        </Button>
                                        <Button 
                                            variant="outlined" 
                                            color="secondary" 
                                            onClick={() => handleRemove(row.id)}
                                        >
                                            Remove
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
