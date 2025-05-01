 
 export const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1002,
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      
      }}
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          borderTop: '1px solid white',
          borderRight: '1px solid white',
          transform: 'rotate(45deg)',
        }}
      />
    </div>
  );

 