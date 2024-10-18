import FacilitiesApp from './FacilitiesApp';

test('renders learn react link', () => {
  render(<FacilitiesApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});