package swe574.backend.devcomReborn.community;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommunityService {
    private final CommunityRepository communityRepository;
    private final MembershipRepository membershipRepository;

    public Community getCommunity(Long id){
        return communityRepository.findById(id).orElseThrow();
    }
    public List<Community> getCommunityList(){
        return communityRepository.findAll();
    }


}
