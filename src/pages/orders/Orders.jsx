import React, { useContext } from 'react';
import './Orders.scss';
import { AuthContext } from '../../App';
import newRequest from '../../utils/newRequest';
import { useQuery, useQueryClient } from 'react-query';

function Orders() {

    const { authUser } = useContext(AuthContext);
    const queryClient = useQueryClient();

    const userId = authUser?.id;

    const { data: services = [], isLoading, error } = useQuery({
        queryKey: ['heartedServices', userId],
        enabled: !!userId,
        queryFn: async () => {
            const res = await newRequest.get('/api/starred-service', {
                params: { userId }
            });
            return res.data;
        },
        staleTime: 60_000,
        refetchOnWindowFocus: false,
    });

    const deleteService = async (id) => {
        await newRequest.delete('/api/starred-service/delete', {
            params: { userId, serviceId: id }
        });
        queryClient.invalidateQueries(['heartedServices', userId]);
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading favorites</p>;

    return (
        <div className="orders">
            <div className="container">
                <h1>Favorites</h1>

                {services.length === 0 && <p>No favorites yet</p>}

                <table>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Seller</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {services.map(service => (
                        <tr key={service.id}>
                            <td>
                                <img
                                    className="img"
                                    src={service.coverImage}
                                    alt=""
                                />
                            </td>
                            <td>{service.title}</td>
                            <td>{service.price}</td>
                            <td>
                                {service.user.firstName} {service.user.lastName}
                            </td>
                            <td>
                                <button onClick={() => deleteService(service.id)}>
                                    ❌
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;
